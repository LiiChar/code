

const graph = {}
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

const infinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity 

const parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["in"] = None 

let processed = [] 

function find_lowest_cost_node(costs) {

}

// def ind_lowest_cost_node(costs):
// lowest_cost = loat("inf")
// lowest_cost_node = None
// for node in costs: ....:· · ····· ··········· Перебрать все узлы
// cost = costs[node]
// i f cost < lowest_cost and node not in processed: ..С: ·
// lowest_cost = cost ....:·· ··············· ... он назначается новым
// lowest_cost_node = node
// return lowest_cost_node

let node = find_lowest_cost_node(costs)

while (node) {
	let cost = costs[node]
	let neighbors = graph[node]
	for (let i = 0; i < Object.keys(neighbors).length; i++) {
		let new_cost = cost + neighbors[Object.keys(neighbors)[i]]
		if (costs[n] > new_cost) {
			costs[Object.keys(neighbors)[i]] = new_cost
			parents[Object.keys(neighbors)[i]] = node
		}
	}
	processed.push(node)
	node = find_lowest_cost_node(costs)
}






















// const graph = {
//     a: [{b: 5}, {c: 3}],
//     b: [{f: 6}, {d: 1}],
//     c: [{d: 1}, {e: 4}],
//     d: [],
//     f: [],
//     e: [{f: 2}]
// }

// function dfs(adj, v, t, call) {
// 	if(v === t) return call
// 	if(v.visited) return 100
    
//     console.log(v);

//     call += adj[v]

// 	v.visited = true
// 	for(let neighbor of adj[v]) {
// 		if(!neighbor.visited) {
//             console.log(Object.keys(neighbor)[0]);
// 			let reached = dfs(adj, Object.keys(neighbor)[0], t, call)
// 			if(reached) return call
// 		}
// 	}
// 	return 100
// }

// console.log(dfs(graph, 'e', 'f', 0));