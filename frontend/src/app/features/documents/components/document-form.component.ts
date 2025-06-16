import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Document } from '../../../core/models/document.model';

@Component({
  selector: 'app-document-form',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule,
           MatFormFieldModule, MatInputModule],
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    duration: ['', Validators.required],
    organization: [''],
    description: ['']
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<DocumentFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Document | null) {
    if (data) {
      this.form.patchValue(data);
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
