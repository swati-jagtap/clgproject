const counters=document.querySelectorAll('.counter');
const speed=10;
counters.forEach(counter=>{
    const updateCount= () =>{
        const target =  +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.floor(target/speed);

        if(count<target){
            counter.innerText=(count + inc);
            setTimeout(updateCount,100);
        }else{
            count.innerText = target;
        }
    }

    updateCount();
})