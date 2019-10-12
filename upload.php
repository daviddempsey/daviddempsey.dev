<?php
if (isset($_POST['submit'])) {
	echo "<p>" . $_POST['file'] . " => file input successful</p>";
	$file = $_FILES['file'];
	$fileName = $_FILES['file']['name'];
	$fileTmpName = $_FILES['file']['tmp_name'];
	$fileSize = $_FILES['file']['size'];
	$fileError = $_FILES['file']['error'];
	$fileType = $_FILES['file']['type'];

	$fileExt = explode(".", $fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('jpg', 'jpeg', 'png', 'pdf');

	if (in_array($fileActualExt, $allowed)) {
		if ($fileError === 0) {
			if ($fileSize < 500000) {
				$fileNameNew = uniqid('', true).".".$fileActualExt;
				$fileDestination = 'uploads'.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
				header("Location: index.php?uploadsuccess");
			}
			else {
				echo 'Your file size is too big!';
			}
		}
		else {
			echo 'There was an error uploading your file!';
			echo $fileError;
		}
	}
	else {
		echo 'You cannot upload files of this type';
		print_r($_FILES['file']);
		print_r($fileExt);
		echo $fileActualExt;

	}
}
