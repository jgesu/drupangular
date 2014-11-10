<?php

/**
 * @file
 * template.php
 */
function drupangular_preprocess_html(&$vars) {
	drupal_add_library('angularjs', 'angularjs');
} 