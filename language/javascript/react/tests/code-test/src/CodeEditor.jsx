import React, { useRef } from 'react';
import { Editor, useMonaco, DiffEditor } from '@monaco-editor/react';

export const CodeEditor = () => {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	function showValue() {
		alert(editorRef.current.getValue());
	}
	return (
		<div>
			<button onClick={showValue}>Show value</button>
			<Editor
				height='90vh'
				width='100vw'
				defaultLanguage='javascript'
				defaultValue='// some comment'
				onMount={handleEditorDidMount}
			/>
		</div>
	);
};
