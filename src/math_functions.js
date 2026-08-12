
const functionRegistry = {
    Linear: (x, param) =>
        param.a * x + param.b,
    Quadratic: (x, param) =>
        param.a * Math.pow(x, 2) + param.b * x + param.c,
    Sin: (x, param) =>
        param.a * Math.sin(param.b * x + param.c) + param.d
}

function returnY(x, parameters, functionType) {
   const f = functionRegistry[functionType]
   return f(x, parameters)
}

function returnPoints(start, end, step, parameters, functionType) {
    const points = [];

    for (let x = start; x <= end; x += step) {
        points.push({
            x,
            y: returnY(x, parameters, functionType),
        });
    }

    return points
}

export default returnPoints