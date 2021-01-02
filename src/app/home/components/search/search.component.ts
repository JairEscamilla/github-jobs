import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobsService } from '../../../core/services/jobs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobsService: JobsService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm(){
    this.form = this.formBuilder.group({
      search: ['', []]
    })
  }

  searchJobs(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      const url = `${environment.api}search=${value.search}`;
      this.jobsService.requestServer(url);
    }
    
  }

}
