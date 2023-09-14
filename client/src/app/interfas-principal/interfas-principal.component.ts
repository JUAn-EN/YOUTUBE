import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from '../youtube.service';
import { ClientSeviceService } from '../client-sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfas-principal',
  templateUrl: './interfas-principal.component.html',
  styleUrls: ['./interfas-principal.component.css']
})
export class InterfasPrincipalComponent implements OnInit {
  videos: any[] = [];
  isMenuOpen = false;
  searchQuery: string = '';
  isUserLoggedIn = false; 
  userName: string = ''; 
  userEmail: string = '';
  isDropdownOpen = false;

  constructor(
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer,
    private clientService: ClientSeviceService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.searchVideos();
    this.checkUserLogin();
  }

  checkUserLogin() {
    this.isUserLoggedIn = this.clientService.haIniciadoSesion();
    if (this.isUserLoggedIn) {
      this.userName = this.clientService.getNombreUsuario();
      this.userEmail = this.clientService.getUserEmail();
      console.log("Usuario logueado:", this.userName, this.userEmail);
    }
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  searchVideos() {
    const keyword = this.searchQuery.trim(); 
    const maxResults = 9;

    this.youtubeService.getVideosByKeyword(keyword, maxResults)
      .subscribe((response: any) => {
        this.videos = response.items;
      });
  }

  openCloseMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getVideoEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  logout() {
    this.clientService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
