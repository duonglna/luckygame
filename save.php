<?php
print_r('The php script is called....');
print_r('The value of $_POST["myText"] is :  ');
var_dump($_POST['mytext']);
$post_data = $_POST['mytext'];
$now = date("Y-m-d-H-i-sa");
    $filename ='data'.$now.'.txt';
    $handle = fopen($filename, "w");
?>
<script>console.log(<?php echo $_POST['mytext']; ?>)</script>
<?php
if (empty($post_data)) {
    fwrite($handle, ' Hmm, I did NOT get any data from AJAX. myText is:  '. $post_data);
}
if (!empty($post_data)) {
    fwrite($handle, ' ... Recieved data from AJAX!   myText:   ');
    fwrite($handle, $post_data);
}
     fclose($handle);
?>
