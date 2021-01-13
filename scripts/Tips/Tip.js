export const Tips = (tip) => {
    return ` 
        <section class="tips">
            <ul class="tip__name">${tip.name}
                <li class="tip__data">${tip.data}</li>
            </ul>    
        </section>
    `
}