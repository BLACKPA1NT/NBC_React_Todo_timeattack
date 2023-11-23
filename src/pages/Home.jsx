import React from "react";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const Home = () => {
	return (
		<>
			<AddTodo />
			<TodoItem />
		</>
	);
};

export default Home;
