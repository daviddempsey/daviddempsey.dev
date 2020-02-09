<?php
	require "header.php";
?>

	<main>
		<div class="wrapper-main">
			<section class="section-default">
				<?php
					if (isset($_SESSION['userId'])) {
						echo '<p class="login-status">You are logged in!</p>';
						echo '<form action="upload.php" method="POST" enctype="multipart/form-data">
							<input type="file" name="file">
							<button type="submit" name="submit">UPLOAD</button>
							</form>';
					}
					else {
						echo '<p class="login-status">You are logged out!</p>';
					}
				?>
			</section>
		</div>	
	</main>

<?php
	require "footer.php";
?>
