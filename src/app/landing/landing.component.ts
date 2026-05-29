

import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ScrollService } from '../shared/services/scroll.service';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private scrollService: ScrollService) {}

  // Services
  services: Service[] = [
    {
      icon: 'fa-solid fa-code',
      title: 'Angular Development',
      desc: 'Building modern, fast, and scalable web applications using Angular 16+ and TypeScript with best practices.'
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'ASP.NET Core APIs',
      desc: 'Creating robust backend RESTful APIs using ASP.NET Core Web API with SQL Server integration.'
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      title: 'Responsive Design',
      desc: 'Ensuring your site looks perfect and works flawlessly across all devices and screen sizes.'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Database Design',
      desc: 'Designing efficient databases and implementing complex data models with SQL Server.'
    },
    {
      icon: 'fa-solid fa-puzzle-piece',
      title: 'Full Stack Integration',
      desc: 'Seamlessly connecting frontend and backend systems for complete, functional applications.'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Deployment & Performance',
      desc: 'Deploying applications with optimization for speed, security, and scalability.'
    }
  ];

  // Projects
  projects: Project[] = [
    {
      title: 'School Management System',
      description: 'Comprehensive school management application with teacher, student, attendance, and course modules. Built with Angular and Bootstrap.',
      image: 'assets/student management.jfif',
      link: 'https://client-neon-sigma.vercel.app/',
      category: 'web'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and checkout system.',
      image: 'assets/commerce.jfif',
      link: 'https://example.com',
      category: 'web'
    },
    {
      title: 'Task Manager App',
      description: 'Manage tasks effectively with real-time updates, priority levels, and task categorization.',
      image: 'assets/Task Manager App.jfif',
      link: 'https://example.com',
      category: 'app'
    }
  ];

  // Skills
  skills: Skill[] = [
    { name: 'Angular', percentage: 70, color: 'from-red-500 to-red-600' },
    { name: 'TypeScript', percentage: 65, color: 'from-blue-500 to-blue-600' },
    { name: 'ASP.NET Core', percentage: 75, color: 'from-purple-500 to-purple-600' },
    { name: 'SQL Server', percentage: 60, color: 'from-orange-500 to-orange-600' },
    { name: 'Tailwind CSS', percentage: 70, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Bootstrap', percentage: 70, color: 'from-indigo-500 to-indigo-600' },
    { name: 'HTML/CSS', percentage: 80, color: 'from-green-500 to-green-600' },
    { name: 'JavaScript', percentage: 50, color: 'from-yellow-500 to-yellow-600' }
  ];

  // Form Data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  filteredProjects: Project[] = [];
  activeFilter: string = 'all';

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    this.filteredProjects = category === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === category);
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  sendEmail(form: any): void {
    if (form.valid) {
      // EmailJS integration would go here
      console.log('Email would be sent:', this.formData);
      // Reset form after sending
      form.resetForm();
      this.formData = { name: '', email: '', message: '' };
    }
  }
}
