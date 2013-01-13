<!DOCTYPE html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Wendy+One' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	</head>
	<body>
		<nav class="main-navigation">
		   <ul>
		    	<li><a id="about" href="#about">about</a>
		    	</li><li><a id="thoughts" href="#thoughts">thoughts</a>
		    	</li><li><a id="creations" href="#creations">creations</a>
		  		</li><li><a id="contact" href="#contact">contact</a>
		    	</li>
		   </ul>
		</nav>
		<div id="experiment">
			<div id="cube">
				<div class="face one">
					<p class="one">
						Hi, I'm Scott Lowe.
						<br><br>
						I'm a 2012 Venture For America fellow, and I currently do design and testing at a small software shop in Detroit.
						<br><br>
						I'm a self-diagnosed ideallist who gets interested in things easily. In college I studied Engineering Physics with a design sequence in Artificial Intelligence and a minor in Mathematics, but I also picked up a strong interest in Economics during my stay at the University of Oklahoma.
						<br><br>
						Thanks for coming to my site :)
					</p>
					<div class="image-placeholder"></div>
				</div>
				<h1 class="title one">about</h1>
				<img src="me.jpg" class="media one" alt="Scott Lowe at the Guardian Building in Detroit">
				<div class="face two">
					<div id="blog-sample">
						<?php
							$request_url = "http://scottdlowe.tumblr.com/api/read?type=post&start=0&num=1";
							$xml = simplexml_load_file($request_url);
							$title = $xml->posts->post->{'regular-title'};
							$post = $xml->posts->post->{'regular-body'};
							$link = $xml->posts->post['url'];
							$small_post = substr($post,0,700);
							echo '<a href="'.$link.'" id="blog-title">'.$title.'</a>';
							echo '<div id="content-wrapper">';
							echo $small_post;
							echo "</div>";
						?>
						<div id="ellipsis">...</div>
					</div>
				</div>
				<div id="link-two-wrapper"><?php echo '<a class="link two" href="http://scottdlowe.tumblr.com">Read More on Tumblr</a>';  ?></div>
				<h1 class="title two">thoughts</h1>
				<div class="face three"></div>
				<h1 class="title three">creations</h1>
				<iframe class="media three" width="640" height="480" src="http://www.youtube.com/embed/2zrCGH0TqI4" frameborder="0"></iframe>
				<div class="face four"></div>
				<h1 class="title four">contact</h1>
				<div id="link-four-wrapper">
					<a href="http://www.linkedin.com/pub/scott-lowe/41/b68/1a2" class="link four">Connect with me on Linkedin</a>
					<a href="https://twitter.com/scott_d_lowe" class="link four">Follow me on Twitter</a>
					<a href="https://github.com/lowe0292" class="link four">Collaborate with me on GitHub</a>
					<a href="https://delicious.com/lowe0292" class="link four">See my bookmarks on Delicious</a>
					<a href="mailto:me@scottdlowe.com" class="link four">Email me@scottdlowe.com</a>
				</div>
				<!-- <div class="face five">
					<h1>Side Five</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ad quibusdam consequuntur sapiente officia natus reprehenderit doloribus in dolores dolorum beatae praesentium rerum ipsum recusandae odio autem quis nisi nam.</p>
				</div> -->
<!-- 				<div class="face six">
					<h1>Side Six</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ad quibusdam consequuntur sapiente officia natus reprehenderit doloribus in dolores dolorum beatae praesentium rerum ipsum recusandae odio autem quis nisi nam.</p>
				</div> -->
			</div>
		</div>
	</body>
	<script type="text/javascript" src="script.js"></script>
</html>