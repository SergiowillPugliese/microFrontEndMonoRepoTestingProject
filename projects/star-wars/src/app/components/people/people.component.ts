import { Component, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { StorageService } from '../../service/storage.service';
import { Person } from '../../model/people.model';


@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  data$!: Observable<Person[]>;
  page = signal(1)

  constructor(
    private dataStorageService: StorageService
  ) {
    effect(() => {
      console.log('effect');
      this.data$ = this.dataStorageService.getData("people", this.page()).pipe(
      map((val) => val.results),
      tap(console.log)
    )})
  }

  ngOnInit(): void {}

  onNextPage() {
    (this.page() < 9) ? this.page.set(this.page() + 1) : this.page();

  }

  onPrevPage() {
    (this.page() > 1) ? this.page.set(this.page() - 1) : this.page();
  }
}
