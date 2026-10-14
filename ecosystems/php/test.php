<?php

require __DIR__ . '/vendor/autoload.php';

$logger = new Psr\Log\NullLogger();
$logger->info('central-manager-ok');
echo "central-manager-ok\n";
