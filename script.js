let lampu = document.getElementById('lampu');
for (let i = 0; i < 100; i++) {
let uuuuu = `<div class="traffic" id="traffic` + i + `">
                <div class="light bulat"></div>
                <button class="button bulat" data-index="`+ i + `"></button></div>`

lampu.innerHTML += uuuuu
}

function toggleLight(index) {
let light = document.getElementById('traffic' + index).querySelector('.light');
light.classList.toggle('on')
}

lampu.addEventListener('click', function (event) { 
    { let index = event.target.attributes['data-index'].value
    toggleLight(index)}
});