<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    use HasFactory;
    protected $fillable = [
        'school_name',
        'school_aliase',
        'school_type_id',
        'country_id',
        'region_id',
        'district_id',
        'town',
        'gps_address',
        'mobile',
        'phone',
        'email',
        'website_url',
        'logo',
        'school_slogan',
        'date_started',
        'founder_name',
        'school_status_id',
        'mission_statement',
        'vision_statement',
        'principal_name',
        'principal_phone_number',
        'principal_email',
        'admin_name',
        'admin_phone_number',
        'admin_email',
        'accreditation_status_id',
        'accreditation_body_id',
        'legal_documents',
        'tin',
        'total_students',
        'students_age_range',
        'total_teaching_staff',
        'total_non_teaching_staff',
        't&c_agreement',
        'contract_agreement',
        'package_id',
        'status',
        'is_deleted',
    ];


    protected $hidden = [
        'is_deleted',
        'create_at',
        'updated_at',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function schoolType()
    {
        return $this->belongsTo(SchoolType::class);
    }

    public function schoolStatus()
    {
        return $this->belongsTo(SchoolStatus::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function accreditationBody()
    {
        return $this->belongsTo(AccreditationBody::class);
    }
}
