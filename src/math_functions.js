
function returnY(x, parameters, functionType) {
    if (functionType == "Linear") {
        return parameters[0][1] * x + parameters[1][1]
    }
    else if (functionType == "Quadratic") {
        return parameters[0][1] * Math.pow(x, 2) + parameters[1][1] * x + parameters[2][1]
    }
    else if (functionType == "Sin") {
        return parameters[0][1] * Math.sin(parameters[1][1] * x + parameters[2][1]) + parameters[3][1]
    }
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