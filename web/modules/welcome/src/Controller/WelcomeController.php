<?php
namespace 'Drupal\welcome\Controller';

class WelcomeController {
  public function Welcome() {
    $element = array('#markup'=>'welcome to drupal',);
    return $element;
  }
}
?>
