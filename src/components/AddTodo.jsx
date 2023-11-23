import React, { useCallback, useState } from "react";

function AddTodo() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const changeTitle = useCallback((e) => {
		setTitle(e.target.value);
		// console.log(e.target.value);
	}, []);
	const changeContent = useCallback((e) => {
		setContent(e.target.value);
		// console.log(e.target.value);
	}, []);

	const handleInput = (e) => {
		console.log({ title }, { content });
	};

	return (
		<div>
			<input
				type="text"
				placeholder="제목을 입력해주세요"
				value={title}
				onChange={changeTitle}
			></input>
			<input
				type="text"
				placeholder="내용을 입력해주세요"
				value={content}
				onChange={changeContent}
			></input>
			<button onClick={handleInput}>추가하기</button>
		</div>
	);
}

export default AddTodo;
