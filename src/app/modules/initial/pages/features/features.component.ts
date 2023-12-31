import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { FormExampleComponent } from '../../components/form-example/form-example.component';

import { FirebaseExampleComponent } from '../../components/firebase-example/firebase-example.component';
import { FirebaseStorageExampleComponent } from '../../components/firebase-storage-example/firebase-storage-example.component';
import { FormGeneratorExampleComponent } from '../../components/form-generator-example/form-generator-example.component';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';
import { StoreCounterExampleComponent } from '../../components/store-counter-example/store-counter-example.component';
import { TableExampleComponent } from '../../components/table-example/table-example.component';

@Component({
  standalone: true,
  selector: 'app-features',
  styleUrl: './features.component.scss',
  templateUrl: './features.component.html',
  imports: [
    MatTabsModule,
    PageNavComponent,
    FormExampleComponent,
    TableExampleComponent,
    FirebaseExampleComponent,
    StoreCounterExampleComponent,
    FormGeneratorExampleComponent,
    FirebaseStorageExampleComponent,
  ],
})
export class FeaturesComponent {}
