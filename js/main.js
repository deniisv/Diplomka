(function () {

    const tabControls = document.querySelector('.tab-conrols')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-conrols__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-conrols__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')

    }

    /*****************menu*******************/

    const menu = document.querySelector('.burger__menu')
    const menuButton = document.querySelector('.burger-icon')

    menuButton.addEventListener('click', openMenu)
    menu.addEventListener('click', closeMenu)

    function openMenu(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-menu')
    }

    function closeMenu(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.burger-icon') || target.classList.contains('burger__menu')) {
            document.body.classList.remove('body--opened-menu')
        }

        consoleLog(e)

    } 

    /***********************************************************/

})()

