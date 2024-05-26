import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-content-center h-100">
                <div className="col-12 col-md-8 col-xxl-6">
                        <h3>{t('notFound.notFound')}</h3>
                </div>
            </div>
        </div>
    );
};
  
export default NotFound;
