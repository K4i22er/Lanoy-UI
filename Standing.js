 function toggleTable(type) {
            const dTable = document.getElementById('drivers-table');
            const cTable = document.getElementById('constructors-table');
            const dTab = document.getElementById('tab-drivers');
            const cTab = document.getElementById('tab-constructors');

            if (type === 'drivers') {
                dTable.style.display = 'block';
                cTable.style.display = 'none';
                dTab.classList.add('active');
                cTab.classList.remove('active');
            } else {
                dTable.style.display = 'none';
                cTable.style.display = 'block';
                cTab.classList.add('active');
                dTab.classList.remove('active');
            }
        }