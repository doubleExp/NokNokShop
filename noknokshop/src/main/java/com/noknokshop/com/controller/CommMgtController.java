package com.noknokshop.com.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noknokshop.com.controller.vo.CommMgtInVo;
import com.noknokshop.com.controller.vo.CommMgtOutVo;
import com.noknokshop.com.service.CommMgtService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/nk/com")
@RequiredArgsConstructor
public class CommMgtController {
	private final CommMgtService CommMgtService;
	
    @PostMapping("/commInqList")
    public CommMgtOutVo commInqList(@RequestBody CommMgtInVo inVo) {
        return CommMgtService.commInqList(inVo);
    }
}
