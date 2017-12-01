import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators';



@Component({
    moduleId: module.id,
    selector: 'data-table',
    templateUrl: 'data-table.component.html',
    styleUrls: ['data-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit{

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    exampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;

    items = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
        // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
        // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
        // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
        // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
        // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
        // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
        // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
        // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
        // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
        // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ]

    constructor() {
    }

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort);
    }

    sortData(sort) {
        console.log(sort)
    }


}
export class ExampleDataSource extends DataSource<any> {

    constructor(private _exampleDatabase: ExampleDatabase, private _sort: MatSort) {
        super();
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
        ];

        return merge(...displayDataChanges).pipe(
            map(() => {
                return this.getSortedData();
            }
        ));
    }


    disconnect() {}

    getSortedData() {
        const data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number|string = '';
            let propertyB: number|string = '';

            switch (this._sort.active) {
                case 'position': [propertyA, propertyB] = [a.position, b.position]; break;
                case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
                case 'weight': [propertyA, propertyB] = [a.weight, b.weight]; break;
                case 'symbol': [propertyA, propertyB] = [a.symbol, b.symbol]; break;
            }

            let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }
}


export class ExampleDatabase {

    dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    get data() { return this.dataChange.value; }

    constructor() {
        this.addData();
    }


    addData() {

        const data = [
            {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
            {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
            {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
            {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
            {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
            {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
            {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
            {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
            {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
            // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
            // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
            // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
            // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
            // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
            // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
            // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
            // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
            // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
            // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
            // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
        ];

        this.dataChange.next(data);
    }


}
