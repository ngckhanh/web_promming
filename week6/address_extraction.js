document.querySelector('#extract_btn').addEventListener('click', function() {
    let addr = document.querySelector('#address').value;
    addr_pattern = /([^ ]+)([^,]+),(,([^,]+))?,([^,]+),([^,]+)/
    let result = addr_pattern.exec(addr);
    let addr_compnents = {
        0: '',
        1: 'Stress number',
        2: 'Stress name',
        3: '',
        4: 'Ward',
        5: 'District',
        6: 'City'
    }
    let msg= '';
    for (let idx in result) {
        if (addr_compnents[idx] == '') continue;
        if (isNaN(idx)) continue;
        msg += '/n' + addr_compnents[idx] + ' : ' + result[idx]; 
    }
    alert(msg);
});

