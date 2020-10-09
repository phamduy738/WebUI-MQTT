<?php namespace Dnc\Cnc24h\Models;

use Model;

/**
 * Model
 */
class Device extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'dnc_cnc24h_device';

    public $belongsTo = [
        'factory' => ['Dnc\Cnc24h\Models\Factory']
            
    ];
    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
