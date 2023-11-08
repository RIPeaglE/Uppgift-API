async function getBusInfo() {
    const response = await fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=599218008eba44d099e67458a832cefe&siteid=7000&timewindow=10");
    const data = await response.json();
    const slElm = document.getElementById("sltimeCon");

    data.ResponseData.Buses.forEach((bus) => {
        let busDiv = document.createElement("div");
        busDiv.setAttribute("class", "slchild");

        const busImage = document.createElement("img");
        busImage.src = "../img/bus2.png";
        busImage.alt = "buss";

        if (bus.GroupOfLine == 'blåbuss') {
            busImage.setAttribute('class', 'blabuss icon');
        } else {
            busImage.setAttribute('class', 'rodbuss icon');
        }

        const lineNumber = document.createElement("p");
        lineNumber.textContent = bus.LineNumber;
        lineNumber.setAttribute("class", "lineNumber");

        const destination = document.createElement("p");
        destination.textContent = bus.Destination;
        destination.setAttribute("class", "destination");

        const displayTime = document.createElement("p");
        displayTime.textContent = bus.DisplayTime;
        displayTime.setAttribute("class", "displayTime");

        const stopPointDesignation = document.createElement("p");
        stopPointDesignation.textContent = ` Läge: ${bus.StopPointDesignation} `;
        stopPointDesignation.setAttribute("class", "stopPosition");

        busDiv.appendChild(busImage);
        busDiv.appendChild(lineNumber);
        busDiv.appendChild(destination);
        busDiv.appendChild(displayTime);
        busDiv.appendChild(stopPointDesignation);

        slElm.appendChild(busDiv);
    });

    // Remove empty divs
    const emptyDivs = Array.from(slElm.getElementsByClassName("slchild")).filter((div) => !div.hasChildNodes());
    emptyDivs.forEach((div) => div.remove());
}

getBusInfo();

async function getTrainInfo() {
    const response = await fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=599218008eba44d099e67458a832cefe&siteid=7006&timewindow=30");
    const data = await response.json();
    const slElm = document.getElementById("sltimeCon");

    data.ResponseData.Trains.forEach((train) => {
        let trainDIV = document.createElement("div");
        trainDIV.setAttribute("class", "slchild");

        const trainImage = document.createElement("img");
        trainImage.src = "../img/traing.png";
        trainImage.alt = "train";
        trainImage.setAttribute("class", "icon");

        const lineNumber = document.createElement("p");
        lineNumber.textContent = train.LineNumber;
        lineNumber.setAttribute("class", "lineNumber");

        const destination = document.createElement("p");
        destination.textContent = train.Destination;
        destination.setAttribute("class", "destination");

        const displayTime = document.createElement("p");
        displayTime.textContent = train.DisplayTime;
        displayTime.setAttribute("class", "displayTime");

        const stopPointDesignation = document.createElement("p");
        stopPointDesignation.textContent = ` Läge: ${train.StopPointDesignation} `;
        stopPointDesignation.setAttribute("class", "stopPosition");

        trainDIV.appendChild(trainImage);
        trainDIV.appendChild(lineNumber);
        trainDIV.appendChild(destination);
        trainDIV.appendChild(displayTime);
        trainDIV.appendChild(stopPointDesignation);

        slElm.appendChild(trainDIV);
    });

    // Remove empty divs
    const emptyDivs = Array.from(slElm.getElementsByClassName("slchild")).filter((div) => !div.hasChildNodes());
    emptyDivs.forEach((div) => div.remove());
}

getTrainInfo();
