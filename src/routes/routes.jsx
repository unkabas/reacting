import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Counter from '../components/screens/counter/counter'
import EventLoop from '../components/screens/eventloop/eventloop'
import Pass from '../components/screens/pass/pass'
import Rest from '../components/screens/rest_api/rest'
import Todo from '../components/screens/todo/todo'
import { routes } from './routes.data'

const componentMap = {
	Layout,
	Counter,
	EventLoop,
	Pass,
	Rest,
	Todo,
}

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, component }) => {
					const Component = componentMap[component]
					return <Route key={path} path={path} element={<Component />} />
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default Router
