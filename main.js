let topLeftButton = document.getElementById("button-1")
let bottomLeftButton = document.getElementById("button-2")
let topButton = document.getElementById("button-3")
let bottomButton = document.getElementById("button-4")
let topRightButton = document.getElementById("button-5")
let bottomRightButton = document.getElementById("button-6")

let football = document.getElementById("football")

let goalKeeper = document.getElementById("goalkeeper")
goalKeeper.setAttribute("class", "goal-keeper")

// football buttons

topLeftButton.addEventListener("click", () => {
    football.setAttribute("class", "football topLeft")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }



});

bottomLeftButton.addEventListener("click", () => {
    football.setAttribute("class", "football bottomLeft")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }

});

topButton.addEventListener("click", () => {
    football.setAttribute("class", "football top")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }

});

bottomButton.addEventListener("click", () => {
    football.setAttribute("class", "football bottom")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }

});

topRightButton.addEventListener("click", () => {
    football.setAttribute("class", "football topRight")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }

});

bottomRightButton.addEventListener("click", () => {
    football.setAttribute("class", "football bottomRight")

    let goalKeeperValue = (Math.random(1) * 6) + 1
    goalKeeperValue = parseInt(goalKeeperValue)
    console.log(goalKeeperValue)

    if (goalKeeperValue == 1) {
        goalKeeper.setAttribute("class", "goal-keeper topLeftGoal")
    } else if (goalKeeperValue == 2) {
        goalKeeper.setAttribute("class", "goal-keeper bottomLeftGoal")
    } else if (goalKeeperValue == 3) {
        goalKeeper.setAttribute("class", "goal-keeper topGoal")
    } else if (goalKeeperValue == 4) {
        goalKeeper.setAttribute("class", "goal-keeper bottomGoal")
    } else if (goalKeeperValue == 5) {
        goalKeeper.setAttribute("class", "goal-keeper topRightGoal")
    } else {
        goalKeeper.setAttribute("class", "goal-keeper bottomRightGoal")
    }

});