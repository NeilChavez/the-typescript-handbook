(()=>{
    type Hero = {
        name: string,
        age?: number,
        power: number[],
        getName?: ()=> string
    }

    let myCustomVariable: string | number | Hero = "Neil"
    console.log(myCustomVariable)
})()