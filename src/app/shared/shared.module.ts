
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    SkillBarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
