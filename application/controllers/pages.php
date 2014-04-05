<?php

class Pages extends CI_Controller {

	public function view($page = 'home')
	{
		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}
		
		$this->load->helper('url');
		
		if( $page == 'home')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);			
			$this->template->load('pages/home', 'blog_posts/home_page_blog' , $data);
			$this->load->view('templates/footer', $data);
		}
		else if( $page == 'blog')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/headerBlog', $data);
			$this->template->load('pages/blog', 'blog_posts/mar2714' , $data);
			$this->template->load('pages/blog', 'blog_posts/dec913' , $data);
			$this->template->load('pages/blog', 'blog_posts/dec813' , $data);
			$this->template->load('pages/blog', 'blog_posts/dec513' , $data);
			$this->template->load('pages/blog', 'blog_posts/nov2213' , $data);
			$this->template->load('pages/blog', 'blog_posts/nov1913' , $data);
			$this->template->load('pages/blog', 'blog_posts/nov1813' , $data);
			$this->template->load('pages/blog', 'blog_posts/nov1413' , $data);
			$this->template->load('pages/blog', 'blog_posts/nov413' , $data);
			$this->template->load('pages/blog', 'blog_posts/oct2813' , $data);
			$this->template->load('pages/blog', 'blog_posts/oct2113' , $data);
			$this->template->load('pages/blog', 'blog_posts/oct1613' , $data);
			$this->template->load('pages/blog', 'blog_posts/oct713' , $data);
			$this->template->load('pages/blog', 'blog_posts/oct113' , $data);
			$this->template->load('pages/blog', 'blog_posts/sept2113' , $data);
			$this->template->load('pages/blog', 'blog_posts/sept1513' , $data);
			$this->template->load('pages/blog', 'blog_posts/sept1213' , $data);
			$this->template->load('pages/blog', 'blog_posts/sept713' , $data);
			$this->template->load('pages/blog', 'blog_posts/sept413' , $data);
			$this->template->load('pages/blog', 'blog_posts/aug3113' , $data);
			$this->template->load('pages/blog', 'blog_posts/aug2913' , $data);
			$this->template->load('pages/blog', 'blog_posts/aug2813' , $data);
			$this->template->load('pages/blog', 'blog_posts/aug2613' , $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'resume')
		{
			$data['title'] = ucfirst($page) ; //Capitalize the first letter 
			$this->load->view('templates/header', $data) ; 
			$this->template->load('pages/resume', 'pages/resume_text', $data) ; 
			$this->load->view('templates/footer', $data) ; 
		}
		else if( $page == 'photos')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_cars', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'photos_spain')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_barcelona', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_cars')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_cars', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_rome')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_rome', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_barcelona')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_barcelona', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_london')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_london', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_sansebastian')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_sansebastian', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_dublin')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_dublin', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_biarritz')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_biarritz', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_camino')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_camino', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_pamplona')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_pamplona', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_bilbao')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_bilbao', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_guernica')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_guernica', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_toledo')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_toledo', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_madrid')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_madrid', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_valencia')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_valencia', 'menus/photomenu_spain', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_track_day_exotics')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_track_day_exotics', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		
		else if( $page == 'album_datr2013')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_datr2013', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_golden_super_cruise')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_golden_super_cruise', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'album_hot_summer_nights')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$this->load->view('templates/header', $data);
			$this->template->load('pages/album_hot_summer_nights', 'menus/photomenu', $data);
			$this->load->view('templates/footer', $data); 
		}
		else if( $page == 'emailer')
		{
			$data['title'] = ucfirst($page); // Capitalize the first letter		
			$this->load->view('pages/emailer', $data) ;
		}
		
	}
}