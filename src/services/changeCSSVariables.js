export const changeCSSVariables = (theme = 'neutral') => {
    const root = document.querySelector(':root')

    const cssVariables = ['header','bgimage']
    
    cssVariables.forEach(el => {
        return root.style.setProperty(`--theme-default-${el}`,`var(--theme-${theme}-${el})`)
    })
    // root.style.setProperty('--theme-default-header',`var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-bgimage',`var(--theme-${theme}-bgimage)`)
}