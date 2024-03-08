// Поиск через граф объект

// const graph = {}
// graph.a = ['b', 'c']
// graph.b = ['f']
// graph.c = ['d', 'e']
// graph.d = ['f']
// graph.e = ['f']
// graph.f = ['g']

// function breadthSearch(graph, start, end) {
//     let queue = []
//     queue.push(start)
//     while (queue.length > 0) {
//         const current = queue.shift()
//         if(!graph[current]) {
//             graph[current] = []
//         }
        
//         if (graph[current].includes(end)){
//             return true
//         } else {
//             queue = [...queue, ...graph[current]]
//         }
//     }
// }

// console.log(breadthSearch(graph, 'a', 'e'));

//  Алгоритм Дейстра

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function algDeistra(graph, start, end) {
    const coast = {}
    const processed = []
    let neighbors = {}
    Object.keys(graph). forEach((node) => {
        if(node !== start) {
            let value = graph[start][node]
            coast[node] = value || 1000000000
        }
    })
    let node = findModelLowerCoast(coast, processed)
    while (node) {
        const cost = coast[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < coast[neighbor]) {
                coast[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findModelLowerCoast(coast, processed)
    } 
    Object.keys(coast).forEach((node) => {
        if (node === end) {
            console.log(`Крайчайший путь от ${start} до ${end} занимает ${coast[node]}`) 
        }
    }) 
    // for (let key in coast) {
    //     if (key === end) {
    //         console.log(`Крайчайший путь от ${start} до ${end} занимает ${coast[key]}`) 
    //     }
    // }
}

function findModelLowerCoast(coast, processed){
    let lowestCost = 1000000000
    let lowestNode;
    Object.keys(coast).forEach((node) => {
        let cost = coast[node]
        if(cost < lowestCost && !processed.includes(node)){
            lowestCost = cost
            lowestNode = node
        }

    })
    return lowestNode
}
algDeistra(graph, 'a', 'e')