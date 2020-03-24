<?php

namespace GetOlympus\Dionysos\Field;

use GetOlympus\Zeus\Field\Field;

/**
 * Builds oEmbed field.
 *
 * @package    DionysosField
 * @subpackage Oembed
 * @author     Achraf Chouk <achrafchouk@gmail.com>
 * @since      0.0.1
 *
 */

class Oembed extends Field
{
    /**
     * @var string
     */
    protected $script = 'js'.S.'oembed.js';

    /**
     * @var string
     */
    protected $style = 'css'.S.'oembed.css';

    /**
     * @var string
     */
    protected $template = 'oembed.html.twig';

    /**
     * @var string
     */
    protected $textdomain = 'oembedfield';

    /**
     * Prepare defaults.
     *
     * @return array
     */
    protected function getDefaults() : array
    {
        return [
            'title' => parent::t('oembed.title', $this->textdomain),
            'default' => [],
            'description' => '',

            // texts
            't_addblock_label' => parent::t('oembed.addblock_label', $this->textdomain),
            't_removeblock_label' => parent::t('oembed.removeblock_label', $this->textdomain),
        ];
    }

    /**
     * Prepare variables.
     *
     * @param  object  $value
     * @param  array   $contents
     *
     * @return array
     */
    protected function getVars($value, $contents) : array
    {
        // Get contents
        $vars = $contents;

        // Retrieve field value
        $vars['value'] = !is_array($value) ? [$value] : $value;

        // Update vars
        return $vars;
    }
}
