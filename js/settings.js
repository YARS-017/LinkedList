document.addEventListener('DOMContentLoaded', () => {  

    // Code to manage inputs within menu

    let inputs = document.querySelectorAll('div.settings-container > div input');
    let error = document.getElementById('settings-error');
    let succes = document.getElementById('succes');

    let animations = {
        nodeAnimationTimeout: 1000,
        pointerAnimationTimeout: 800,
        deleteTimeout: 1000
    }; // default values

    setAnimationsTimeOuts(animations);

    document.getElementById('modal-btn').addEventListener('click', () => {
        for (let i = 0; i < inputs.length; i++) 
            if (inputs[i].valueAsNumber < 0) {
                succes.innerHTML = null;
                error.innerHTML = 
                    '<i class="fas fa-exclamation-circle"></i>' +
                    'Miliseconds cannot be negative';
                error.firstChild.style.animation = "highlightNode .8s ease";
                return;
            }

            $('#modal').modal('toggle');

        error.innerHTML = null;

        animations.nodeAnimationTimeout = 
            isNaN(inputs[0].valueAsNumber) ?
            1000 : inputs[0].valueAsNumber;

        animations.pointerAnimationTimeout = 
            isNaN(inputs[1].valueAsNumber) ?
            800 : inputs[1].valueAsNumber;

        animations.deleteTimeout = 
            isNaN(inputs[2].valueAsNumber) ?
            1000 : inputs[2].valueAsNumber;

        succes.innerHTML = 
            '<i class="fas fa-check-circle"></i>' + 
            " Saved!";
        succes.firstChild.style.animation = "highlightNode .8s ease";

        setAnimationsTimeOuts(animations);
    });

    // const btnSave = document.getElementById('modal-btn');
    // btnSave.onclick = () => {
        
    //     btnSave.removeAttribute('data-toggle', 'modal');
    //     btnSave.removeAttribute('data-target', '#modal');

    //     for (let i = 0; i < inputs.length; i++) 
    //         if (inputs[i].valueAsNumber < 0) {
    //             succes.innerHTML = null;
    //             error.innerHTML = 
    //                 '<i class="fas fa-exclamation-circle"></i>' +
    //                 'Miliseconds cannot be negative';
    //             error.firstChild.style.animation = "highlightNode .8s ease";
    //             return;
    //         }

    //     error.innerHTML = null;
                
    //     animations.nodeAnimationTimeout = 
    //         isNaN(inputs[0].valueAsNumber) ?
    //         1000 : inputs[0].valueAsNumber;

    //     animations.pointerAnimationTimeout = 
    //         isNaN(inputs[1].valueAsNumber) ?
    //         800 : inputs[1].valueAsNumber;

    //     animations.deleteTimeout = 
    //         isNaN(inputs[2].valueAsNumber) ?
    //         1000 : inputs[2].valueAsNumber;

    //     succes.innerHTML = 
    //         '<i class="fas fa-check-circle"></i>' + 
    //         " Saved!";
    //     succes.firstChild.style.animation = "highlightNode .8s ease";
        
    //     setAnimationsTimeOuts(animations);
    // }

    
});