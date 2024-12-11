import layout from '../components/layout/layout'
import counter from '../components/screens/counter/counter'
import eventloop from '../components/screens/eventloop/eventloop'
import pass from '../components/screens/pass/pass'
import rest from '../components/screens/rest_api/rest'
import todo from '../components/screens/todo/todo'

export const routes = [
	{ path: '/', component: layout },
	{ path: '/counter', component: counter },
	{ path: '/eventloop', component: eventloop },
	{ path: '/pass', component: pass },
	{ path: '/rest', component: rest },
	{ path: '/todo', component: todo },
]
