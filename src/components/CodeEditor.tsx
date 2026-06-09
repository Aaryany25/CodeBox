// import React from 'react'
import Editor from '@monaco-editor/react'
function CodeEditor({language,value,onChange
}: {language: string,value: string,onChange: any}) {
  return (
<div className="w-full border-2 border-gray-500 rounded">
<p className='text-white font-large px-2 uppercase'>{language}</p>
    <Editor
    language={language}
    value={value}
    onChange={onChange}
    height="50vh"
    />
    </div>
  )
}

export default CodeEditor