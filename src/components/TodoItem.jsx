import React from "react";
import AddTodo from "./AddTodo";
import styled from "styled-components";

function TodoItem(props) {
	return (
		<div>
			<div>{props.item}</div>
		</div>
	);
}

export default TodoItem;
