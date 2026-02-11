import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
   {
  title: 'School Management System',
  description: 'Angular + Bootstrap responsive school management app with teacher, student, attendance, and course modules.',
  image: 'assets/School Management.png', // apni image path yahan daal do
  link: 'https://client-neon-sigma.vercel.app/',
  category: 'web'
}
,
    {
      title: 'Task Manager App',
      description: 'Manage tasks effectively with Angular + LocalStorage',
      image: '  assets/Task Manager App.jfif',
      link: 'https://example.com',
      category: 'app'
    },

 {
  title: 'Weather App',
  description: 'Modern Weather Application built using Angular, Bootstrap and OpenWeather API with 5-day forecast feature.',
  image: 'assets/weather.jpg',
  link: 'https://weather-app-a13e.vercel.app/',
  category: 'web'
}

  ];

  filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    AOS.init({ duration: 1000, once: true });
  }

  filterProjects(category: string) {
    this.filteredProjects =
      category === 'all'
        ? this.projects
        : this.projects.filter(p => p.category === category);
  }
    activeFilter: string = 'all';
}
