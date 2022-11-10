const buttontdl = document.querySelector(".buttons");
const inputtdl = document.querySelector("#inputcol");
const deleteI = document.querySelector(".photo1");
const mainlist = document.querySelector(".main");
const image = document.querySelector(".photo");
const clonI = inputtdl.cloneNode(true);


deleteI.addEventListener("click", () => {
    document.getElementById('enter').value = ""
})

buttontdl.addEventListener("click", () => {
    let test = document.querySelector("#inputcol");

    if (test == null) {
        const valueElement = document.querySelector(".main");
        valueElement.append(clonI)
        document.getElementById('enter').value = ""

        const deleteI = document.querySelector(".photo1");
        deleteI.addEventListener("click", () => {
            document.getElementById('enter').value = ""
        })
    }

    let number = 0;
    document.querySelectorAll(".main").forEach(() => {

        number++;
    })

    if (number > 4) {
        let valuee = document.querySelector(".main");
        valuee.scrollTop = valuee.scrollHeight;
    }

    let input = document.getElementById("enter");
    input.addEventListener('keypress', (event) => {

        if (event.key === 'Enter') {
            if (document.getElementById('enter').value != "") {
                let one = input.value;
                let two = document.getElementById('.main2');
                let three = two.cloneNode(true);

                three.removeAttribute('id');
                three.classList.add("main")
                const appendElement = document.querySelector('.main');
                appendElement.append(three)

                let valuee = document.querySelector('.main');
                valuee.scrollTop = valuee.scrollHeight;

                let value2 = document.querySelector(".task:last-child .header")
                value2.innerHTML = task

                let removecol = document.querySelector("#inputcol");
                appendElement.removeChild(removecol)

                const remove = document.querySelector('.task:lastchild .photo1remove')
                remove.addEventListener('click', () => {

                    appendElement.removeChild(three)

                    let numberelement = document.querySelectorAll(".main");
                    let number2 = 0;

                    numberelement.forEach((item) => {

                        number2++;
                    })

                    if (number2 == 0) {

                        const appendElement = document.querySelector(".main");
                        appendElement.append(clonI);
                        document.getElementById('enter').value = ""
                    }
                })

                const newelement = document.querySelectorAll(".task");
                let number3 = 0;

                newelement.forEach(() => {

                    number3++;
                })
            }
        }
    })
})

let input = document.getElementById("enter")
input.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {

        if (document.getElementById("enter").value != "") {
            let one = input.value;
            let two = document.getElementById('main2');
            let three = two.cloneNode(true)

            three.removeAttribute('id');
            three.classList.add('task');

            const appendElement = document.querySelector(".main");
            appendElement.append(three);

            let value2 = document.querySelector(".task:last-child .header")
            value2.innerHTML = task

            let removecol = document.querySelector("#inputcol");
            appendElement.removeChild(removecol)

            const remove = document.querySelector('.task:lastchild .photo1remove')
            remove.addEventListener('click', () => {

                appendElement.removeChild(three);

                let numberelement = document.querySelectorAll(".task");
                let number2 = 0;

                numberelement.forEach(() => {

                    number2++;
                })

                if (number2 == 0) {

                    const appendElement = document.querySelector(".main");
                    appendElement.append(clonI);
                    document.getElementById('enter').value = ""


                    let deleteI = document.querySelector(".photo1");
                    deleteI.addEventListener('click', () => {
                        document.getElementById('enter').value = ""
                    })

                }

            })

        }

    }
})
function sortListDir() {

    let i, switching, b, shouldSwitch, dir, switchcount = 0;

    switching = true;
    dir = "asc";

    while (switching) {

        switching = false;
        b = mainlist.querySelectorAll('.task');
        for (i = 0; i < b.length - 1; i++) {
            shouldSwitch = false;

            if (dir == "asc") {

                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

                    shouldSwitch = true;

                    sortimage.src = "./picture/Group 73 (1).png";
                    break;
                }
            }
            else if (dir == "desc") {

                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {

                    shouldSwitch = true;

                    sortimage.src = "./picture/Group 91.png";
                    break;
                }
            }
        }

        if (shouldSwitch) {

            b[i].parentNode.insertBefore(b[i + 1], b[i]);

            switching = true;

            switchcount++;
        }
        else {

            if (switchcount == 0 && dir == "asc") {

                dir = "desc";
                switching = true;
            }
        }
    }
}

new Sortable(mainlist, {
    animation: 200,
});