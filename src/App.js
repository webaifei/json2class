
import { useState, useEffect, useCallback, useRef } from 'react';
import Handlebars from 'handlebars';
import AceEditor from "react-ace";
import './App.css';
import { is, TYPES, isTimestamp, capitalize } from './utils';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function App() {
  const [code, setCode] = useState('');
  const [jsonStr, setJsonStr] = useState('');
  const [modelName, setModelName] = useState('');
  const [error, setError] = useState('');
  let needDateFormat = useRef(false);
  const templateSource = `
    import { makeAutoObservable, toJS } from 'mobx';
    {{#if needDateFormat}}
    import dayjs from 'dayjs';
    import { dateFormat } from '@config/index';
    {{/if}}

    /**
     * {{modelName}}
     */
    export default class {{modelName}} {
      {{#each json}}
      {{{@key}}} = {{{@this}}};
      {{/each}}
      // 你可以精细的控制赋值的过程
      constructor(json) {
        makeAutoObservable(this);
        // const {id} = json;
        // this.id = id;
        Object.assign(this, json);
      }

      {{#each computed}}
      {{{@key}}} = {{{@this}}};
      {{/each}}
      // 你可以精细的控制赋值的过程
      updateFromJson(json) {
        // const {id} = json;
        // this.id = id;
        // ...
        Object.assign(this, json);
      }
      toJSON() {
        return toJS(this);
      }
    }
    `;
  const template = Handlebars.compile(templateSource);
  const formatJSONAndGetComputed  = useCallback(
    (json) => {
      console.log(json, 'origin--');
      const computed = {};
      for(let key in json) {
        console.log(key, 'key')
        needDateFormat.current = false;
        const value = json[key];
        if(isTimestamp(value)) {
          json[key]=`'--'`;
          computed[`get computed${capitalize(key)}`] = `() {
          return dayjs(this.${key}).format(dateFormat)
        };`;
          needDateFormat.current = true;
        } else if(is(value, TYPES.Array)) {
          json[key]= `[]`;
        } else if(is(value, TYPES.Null) || is(value, TYPES.Object)) {
          json[key]= `{}`;
        } else  {
          json[key] = `'--'`;
        }
      }
      return computed;
    },
    [],
  )
  useEffect(() => {
    if(jsonStr) {
      try {
        let json = JSON.parse(jsonStr);
        const computed = formatJSONAndGetComputed(json);
        const newCode = template({json,computed, modelName, needDateFormat: needDateFormat.current});
        console.log(newCode, json,'newCode');
        setCode(newCode);
      } catch(err) {
        // setError(err);
        console.log(err);
      }

    }
    return () => {
    }
  }, [jsonStr, template, modelName, formatJSONAndGetComputed]);
  return (
    <div className="App">
      <header className="App-header">
        generate class from json.
      </header>
      <p>{error.message}</p>
      <div className="content">
        <div className="left">
          <input className="input" type="text" value={modelName} placeholder="input your model name e.g TestModel" onChange={(e)=> {
            setModelName(e.target.value);
          }}/>
          <textarea className="textarea" value={jsonStr}  placeholder="input json" onChange={(e)=> {
            setJsonStr(e.target.value);
          }}>
          </textarea>
          <AceEditor
            mode="java"
            theme="github"
            onChange={(e)=> {
              setJsonStr(e.target.value);
            }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="right">
          <AceEditor
            mode="java"
            theme="github"
            name="UNIQUE_ID_OF_DIV_2"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
