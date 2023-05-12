import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-table',
  templateUrl: './above-table.component.html',
  styleUrls: ['./above-table.component.scss']
})
export class AboveTableComponent implements OnInit {
  @Input() _id: string;
  @Input() name: string;
  @Input() description: string;
  @Input() userServices: any[] = [];
  ngOnInit(): void {
    this.displayFormData();
  }

  displayFormData(): void {
    console.log('User Name:', this._id);
    console.log('Description:', this.description);
  }
}
