<?php namespace Dnc\Cnc24h\Models;

use Model;

/**
 * Model
 */
class Factory extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
     protected $fillable = ['id','name'];
    /**
     * @var string The database table used by the model.
     */
    public $table = 'dnc_cnc24h_factory';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
