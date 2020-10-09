<?php namespace Dnc\Cnc24h\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Device extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Dnc.Cnc24h', 'main-menu-item2');
    }
}
