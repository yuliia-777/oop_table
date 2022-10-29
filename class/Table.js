class Table {
    
    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this.data = [];
        this.attribute = [];
        this._element = '';
    }

    /* method set Table header */
    setTableHeader(header) {
        if (typeof header == 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /* method set Table headerClass */
    setTableHeaderClass(headerClass) {
        if (typeof headerClass == 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /* method set element */
    setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    /* method show Table */
    render() {
        /* show header */
        if (this.header) {
            const header = document.createElement('h1');
            header.textContent = this.header;
            this.headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            })
            document.querySelector(this.element).append(header);
        }

        /* show table */
        let table = document.createElement('table');
        this.tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        })
        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].name) {
                th.textContent = this.attribute[key].name;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);

        /* show table data */
        for (let i = 0; i < this.data.length; i++) {
            let dataArray = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArray[key];
                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        
        /* render table */
        document.querySelector(this.element).append(table);
    }
}