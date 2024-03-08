
const graph = {
    a: ['b', 'c'],
    b: ['f', 'd'],
    c: ['d', 'e'],
    d: [],
    f: [],
    e: ['f']
}

function searchGraph(graph, start, finish) {

    
    let queue = []
    
    queue.push(start)
    
    start.visited = true

    let iter = 0
    
    while (queue.length > 0) {
        let elem = queue.shift()

        for (let neighbor of graph[elem]) {
            if (!neighbor.visited) {
                queue.push(neighbor)
                neighbor.visited = true
                iter += 1
                if (neighbor == finish) {
                    return iter
                }
            }
        }
    }

}

console.log(searchGraph(graph, 'a', 'f'));