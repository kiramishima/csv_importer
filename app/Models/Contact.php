<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property int $team_id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property int $sticky_phone_number_id
 * @property string $created_at
 * @property string $updated_at
 */
class Contact extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['team_id', 'name', 'phone', 'email', 'sticky_phone_number_id', 'created_at', 'updated_at'];

}
